const API_URL = process.env.AWS_BUILD ? '/mailer/api/v2' : '//mailer.staging.guesty.com/api/v2';

export default {
    API_URL,
  };