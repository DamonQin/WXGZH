module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'WXGZH',
      script    : './bin/www',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : 'damon.xcworld.cn',
      ref  : 'origin/master',
      repo : 'git@github.com:DamonQin/WXGZH.git',
      path : '/srv/www/wx-pro',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      "ssh_options": "StrictHostKeyChecking=no",
      "post-setup": "ls -la",
      "pre-deploy-local" : "echo 'This is a local executed command'"
    },
    dev : {
      user : 'root',
      host : 'guson',
      ref  : 'origin/master',
      repo : 'git@github.com:DamonQin/WXGZH.git',
      path : '/srv/www/wx-dev',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      env  : {
        NODE_ENV: 'development'
      }
    }
  }
};
