export const getPositionQuery = (options?: PositionOptions) => {
  return new Promise<GeolocationPosition>((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  ).then(({ coords }) => `${coords.latitude},${coords.longitude}`)
}
