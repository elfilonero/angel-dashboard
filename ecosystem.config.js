module.exports = {
  apps: [{
    name: 'angel-dashboard',
    script: 'server.js',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    env: {
      NODE_ENV: 'development',
      PORT: 3002
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3002
    },
    
    // Configuración de logs
    log_file: './logs/combined.log',
    out_file: './logs/out.log', 
    error_file: './logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    
    // Auto restart configuración
    max_restarts: 5,
    min_uptime: '10s',
    max_memory_restart: '200M',
    
    // Configuración específica para dashboard estático
    kill_timeout: 1000,
    wait_ready: false,
    
    // Variables específicas
    monitoring: false
  }]
};