const API_URL = process.env.AWS_BUILD ? '/mailer/api/v2' : '//mailer.staging2.guesty.com/api/v2';
const legacyUrl = process.env.AWS_BUILD ? '/dashboard' : '//dashboard-staging2.firebaseapp.com';

export default {
  legacyUrl,
  API_URL,
};
