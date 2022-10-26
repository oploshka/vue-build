
// TODO: продумать схему
export default function () {
  return {
    AUTH_API_URL:       { required: true, type: String, default: () => { return ''; } },
    AUTH_API_REALM:     { required: true, type: String, default: () => { return ''; } },
    BASE_API_URL:       { required: true, type: String, default: () => { return ''; } },
    EXTRACTION_API_URL: { required: true, type: String, default: () => { return ''; } },
  };
}
