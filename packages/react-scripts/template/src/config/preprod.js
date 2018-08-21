const legacyUrl = process.env.AWS_BUILD ? '/dashboard' : '//dashboard-preprod-127b2.firebaseapp.com';
const apiUrl = process.env.AWS_BUILD ? '/mailer/api/v2' : '//mailer.preprod.guesty.com/api/v2';

export default {
  legacyUrl: legacyUrl,
  API_URL: apiUrl,
};
