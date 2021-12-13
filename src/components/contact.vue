<template>
    <section class="p-5" id="contact">
    <div class="container">
      <div class="row g-4">
        <div class="col-md">
          <h1 class="text-center mb-4 text-warning">Contact</h1>
          <ul class="list-group list-group-flush lead">
            <li class="list-group-item">
              <span class="fw-bold"><i class="bi bi-geo-alt"></i> Main Location: </span>Gotladera St. Zone 5 Bulan, Sorsogon</li>
            <li class="list-group-item">
            <iframe :src="myLocation" width="400" height="250" style="border:0;" loading="lazy"></iframe></li>
            <li class="list-group-item">
              <span class="fw-bold"><i class="bi bi-phone"></i> Mobile Phone: </span>+639309783220</li>
            <li class="list-group-item">
              <span class="fw-bold"><i class="bi bi-envelope"></i> Personal Email: </span>honasanhomer@gmail.com</li>
          </ul>
        </div>
      </div>
      <div class="d-flex mt-4">
        <a href="https://www.facebook.com/MerArchitect.45/" target="_blank" class="mx-3"><h2 class="bi bi-facebook"></h2></a>
        <a href="https://github.com/Homer-45" target="_blank" class="mx-3"><h2 class="bi bi-github"></h2></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      myLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.5529548647646!2d123.87363751481884!3d12.677290291049484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0d6b9fd718179%3A0x1301bf6c03097956!2sC.%20Gotladera%20Street%2C%20Bulan%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1639232679316!5m2!1sen!2sph'
    }
  }
}
</script>