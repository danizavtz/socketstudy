<template>
  <div class="hello">
    <vue-cal
      ref="vuecal"
      style="height: 500px"
      :disable-views="['years', 'year']"
      :on-event-click="onEventClick"
      :locale="locale"
      :cell-click-hold="false"
    />
    <button @click="customEventCreation">Criar novo evento</button>
    Quantidade de usuarios: {{ quantidadeUsuarios }}
  </div>
</template>

<script>
// In your Vue.js component.
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/pt-br.js";
import "vue-cal/dist/vuecal.css";
export default {
  components: { VueCal },
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    locale: "pt-br",
    selectedEvent: {},
    showDialog: false,
    quantidadeUsuarios: 0,
    configuracaoCalendario: {
      title: "Novo evento",
      createButtonLabel: "Criar"
    }
  }),
  sockets: {
    connect: function() {
      this.$socket.emit("novaconexao");
    },
    novaconexao: function(data) {
      this.quantidadeUsuarios = data;
    },
    disconnecteduser: function(data) {
      this.quantidadeUsuarios = data;
    }
  },
  methods: {
    customEventCreation() {
      const dateTime = new Date()
      
        this.$refs.vuecal.createEvent(          
          dateTime,
          120,
          { title: "Meu evento", content: "Oba! 🎉", class: "blue-event" }
        );      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
