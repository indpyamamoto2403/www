import NisaChart from '../resources/js/Organisms/NisaChart.vue';

export default {
  title: 'Organisms/NisaChart',
  component: NisaChart,
};

const Template = (args) => ({
  components: { NisaChart },
  setup() {
    return { args };
  },
  template: '<NisaChart v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // Add default props here if any
};
