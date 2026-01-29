const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT) || 3002;

// Logging mejorado
function log(level, message, ...args) {
  const timestamp = new Date().toISOString();
  const colors = {
    info: '\x1b[36m',    // Cyan (tema Angel)
    warn: '\x1b[33m',    // Yellow
    error: '\x1b[31m',   // Red
    success: '\x1b[35m'  // Magenta (futurista)
  };
  const color = colors[level] || '';
  const reset = '\x1b[0m';
  console.log(`${color}[${timestamp}] ${level.toUpperCase()}: ${message}${reset}`, ...args);
}

// Estadísticas de acceso
const stats = {
  startTime: Date.now(),
  totalRequests: 0,
  uniqueIPs: new Set(),
  lastAccess: null
};

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Estadísticas de acceso
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    stats.totalRequests++;
    stats.uniqueIPs.add(clientIP);
    stats.lastAccess = new Date().toISOString();
    
    // API endpoints
    if (req.url === '/api/stats') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        const uptime = Math.floor((Date.now() - stats.startTime) / 1000);
        const response = {
            uptime: {
                seconds: uptime,
                formatted: `${Math.floor(uptime/3600)}h ${Math.floor((uptime%3600)/60)}m`
            },
            requests: stats.totalRequests,
            uniqueVisitors: stats.uniqueIPs.size,
            lastAccess: stats.lastAccess,
            timestamp: new Date().toISOString()
        };
        res.end(JSON.stringify(response));
        log('info', 'Stats requested', { ip: clientIP });
        return;
    }
    
    if (req.url === '/api/health') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
        return;
    }
    
    // Archivo estático
    let filePath = req.url === '/' ? '/index.html' : req.url;
    
    // Limpiar path para seguridad
    filePath = path.normalize(filePath);
    if (filePath.indexOf('..') !== -1) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request');
        log('warn', 'Path traversal attempt', { ip: clientIP, path: req.url });
        return;
    }
    
    filePath = path.join(__dirname, filePath);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Serve index.html for SPA routing
                fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Server Error');
                        log('error', 'Failed to serve index.html', { error: err.message });
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end(content);
                        log('info', 'SPA route served', { ip: clientIP, path: req.url });
                    }
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                log('error', 'File read error', { file: filePath, error: err.message });
            }
        } else {
            // Headers de seguridad básicos
            const headers = {
                'Content-Type': contentType,
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'X-XSS-Protection': '1; mode=block'
            };
            
            // Cache headers para assets estáticos
            if (ext && ext !== '.html') {
                headers['Cache-Control'] = 'public, max-age=3600'; // 1 hora
            }
            
            res.writeHead(200, headers);
            res.end(content);
            log('info', 'File served', { ip: clientIP, file: path.basename(filePath), size: content.length });
        }
    });
});

// Manejo de errores del servidor
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        log('error', `Puerto ${PORT} ya está en uso`);
    } else {
        log('error', 'Error del servidor', { error: error.message });
    }
    process.exit(1);
});

// Manejo de señales para cierre graceful
process.on('SIGINT', () => {
    log('info', 'Cerrando Angel Dashboard...');
    server.close(() => {
        log('success', 'Servidor cerrado correctamente');
        process.exit(0);
    });
});

process.on('uncaughtException', (error) => {
    log('error', 'Error no capturado', { error: error.message, stack: error.stack });
    process.exit(1);
});

// Estadísticas periódicas (cada 30 minutos)
setInterval(() => {
    if (stats.totalRequests > 0) {
        log('info', 'Estadísticas', {
            requests: stats.totalRequests,
            visitors: stats.uniqueIPs.size,
            uptime: Math.floor((Date.now() - stats.startTime) / 1000),
            lastAccess: stats.lastAccess
        });
    }
}, 30 * 60 * 1000);

server.listen(PORT, '0.0.0.0', () => {
    log('success', 'Angel Dashboard iniciado', {
        port: PORT,
        url: `http://localhost:${PORT}`,
        pid: process.pid
    });
    log('info', 'Módulos disponibles', {
        crm: 'crm.contextia.cloud',
        todo: 'todo.contextia.cloud',
        eloduk: 'eloduk.contextia.cloud'
    });
});
