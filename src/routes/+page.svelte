<script>
  import EditorForm from "$lib/UI/EditorForm.svelte";
  
</script>

<EditorForm fields={
  {
    "Header":"Identificativi del servizio",
    "ID del servizio":"number",
    "Data creazione":"date",
    "Data aggiornamento":"date",
    "Stato del servizio":"text"
  }
}
  />

  <EditorForm fields={
    {
      "Header":"Informazioni generali",
      "Titolo servizio":"text",
      "Short description":"textarea",
      "Ente erogatore":"select",
      "Stuttura resposabile":"select"
    }
  }/>

<EditorForm fields={
  {
    "Header":"Dettagli del servizio",
    "Descrizione estesa":"textarea",
    "Destinatari":"select",
    "Ambito":"select"
  }
}/>

<EditorForm fields={
  {
    "Header":"Accesso al servizio",
    "Requisti di accesso":"text",
    "Modalità di accesso":"textarea",
    "Link di accesso": "text"
  }
}/>

<EditorForm fields={
  {
    "Header":"Procedura",
    "Passaggi Operativi":"text",
    "Tempi di erogazione":"time",
    "Costi e tariffe": "cost",
    "Modalità di pagamento":"text",
    "Normativa rierimento":"text"
  }
}/>

<EditorForm fields={
  {
    "Header":"Contatti e supporto",
    "Referenti":"text",
    "Modalità di contatto":"text",
    "FAQ": "textarea"
  }
}/>

<EditorForm fields={
  {
    "Header":"Materiale utile",
    "Allegati scaricabili":"text",
    "Collegamenti esterni":"textarea"
  }
}/>

<EditorForm fields={
  {
    "Header":"Note",
    "Avvisi":"text",
    "Collegamenti esterni":"textarea"
  }
}/>



