export default function (pub, priv) {
  return {
    security: priv.SECURITY,

    version: pub.VERSION,
    serverType: pub.SERVER_TYPE,
  }
}
