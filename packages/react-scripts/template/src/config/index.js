import base from './base';
import development from './development';
import staging from './staging';
import staging2 from './staging2';
import production from './production';
import preprod from './preprod';
import feature from './feature';

const env = process.env.GUESTY_ENV || 'development';

const config = { development, staging, staging2, production, preprod, feature };

if (!['test', 'production'].includes(process.env.NODE_ENV)) {
  console.log(`Env: ${env}`);
}

export default { ...base, ...config[env] };
