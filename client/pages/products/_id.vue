<template>
  <main>
      <div>
      <Navbar />
      <nuxt />
      <Footer />
    </div>
    <!-- Breadcrumbs -->
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">
                Category
              </a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">
                Product title
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
