export default function (nuxt) {
  const {$axios, redirect, app, router} = nuxt;
  const {$toast, $auth} = app;

  console.log($auth)

  $axios.interceptors.response.use(response => {
    if (response.message) {
      $toast.success(response.message)
    }
    return response;
  }, error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 409:
          $toast.error(`Conflict: ${error.response.data.message}`)
          break
        case 404:
          $toast.error(`404: ${error.response.data.message}`)
          break
        case 422:
          $toast.error(`Validation error: ${error.response.data.message}`)
          break
        case 500:
          $toast.error(`Server error: ${error.response.data.message}`)
          break
        default:
          $toast.error('Ошибка')
          break
      }
    } else {
      $toast.error('Ошибка')
    }
  });
}
