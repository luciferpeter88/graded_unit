class Session {
  getsessionData(request) {
    try {
      // if the session isAuthenticated is not set, send a response to the client
      if (!request.session.isAuthenticated) {
        return { isAuthenticated: false };
      } else {
        // if the session user is set, destructure the password from the session user and send a response to the client
        const { password, ...userWithoutPassword } = request.session.user;
        return userWithoutPassword;
      }
    } catch (error) {
      console.log(error);
    }
  }
  // create a method to update the session data
  updateSessionData(request, overwriteSession) {
    try {
      const newSessionData = {
        ...this.getsessionData(request),
        ...overwriteSession,
      };

      return (request.session.user = newSessionData);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Session;
