export const getUrlPk = (match) => {
    // .com/some_url/pk <-
    const urlArray = match.url.split('/').filter(el => el != "")
    const pk = urlArray[urlArray.length - 1]
    return pk
}
