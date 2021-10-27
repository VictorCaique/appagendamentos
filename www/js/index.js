var app = {
        
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);  
    },

    inserir: function(){
        var db = firebase.firestore();

        let cnome = document.getElementById("txtNome").value;
        let ctelefone = document.getElementById("txtTelefone").value;
        let corigem = document.getElementById("txtOrigem").value;
        let cdata_contato = document.getElementById("txtDataContato").value;
        let cobservacao = document.getElementById("txtObservacao").value;

        db.collection('agendamentos').add({
    		nome: cnome,
    		telefone: ctelefone,
    		origem: corigem,
    		data_contato: cdata_contato,
    		observacao: cobservacao
		})
		.then((doc) => {
    		console.log("Document written with ID: ", doc.id);
            window.location.href = cordova.file.applicationDirectory + "www/index.html";
		})
		.catch((e) => {
    		console.error("Error adding document: ", e);
		});
    },
    
};

app.initialize();