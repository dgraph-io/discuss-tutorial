function addUsername(user, context, callback) {
  const namespace = "<<app-claims-namespace>>"
  context.idToken[namespace] = {
    username: user.user_id,
  }

  return callback(null, user, context)
}
