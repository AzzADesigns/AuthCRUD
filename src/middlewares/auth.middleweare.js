
export const isAuth = (req, res, next) => {
    const token req.cookies.token

    next()

}