// composables/useScreenSizeMonitoring.js
import { ref, onMounted, onUnmounted } from 'vue';



const useScreenSizeMonitoring = (breakpoint = 768) => {
  const isPcSize = ref(false);
  const currentWidth = ref(0);

  const updateSize = () => {
    currentWidth.value = window.innerWidth;
    isPcSize.value = window.innerWidth >= breakpoint;
  };

  const onResize = () => {
    updateSize();
  };

  onMounted(() => {
    updateSize();
    window.addEventListener('resize', onResize);
  });
  return { isPcSize, currentWidth };
};

export default useScreenSizeMonitoring;