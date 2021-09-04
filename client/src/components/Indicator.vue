<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.informer-title {
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
}

.informer-block {
  margin-top: 1rem;
}

.informer-block-title {
  font-size: 1.2rem;
}

.informer-block-caption {
  font-size: 0.9rem;
  font-weight: 300;
}

.informer-subtitle {
  display: flex;
  justify-content: center;

  div {
    margin: 0 0.5rem;
  }
}
</style>
