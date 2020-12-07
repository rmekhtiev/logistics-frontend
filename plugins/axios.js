export default function (nuxt) {
  const {$axios, redirect, app, router} = nuxt;
  const {$toast, $auth} = app;

  $axios.interceptors.response.use(response => {
    switch (response.status) {
      case 200:
        switch (response.config.method) {
          case "put":
            $toast.success('Успешно отредактировано')
            break
          case "delete":
            $toast.success('Успешно удалено')
        }
        break
      case 201:
        $toast.success('Успешно создано')
        break
    }
    return response;
  }, error => {
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
    }
  });
}
