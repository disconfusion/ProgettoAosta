<script >
  import Header from "./Header.svelte";

    let {fields} = $props();
    let fieldsName = Object.keys(fields).slice(1);
</script>

<h1>{fields["Header"]}</h1>

<section id="card" class="rounded">
    {#each fieldsName as fieldName, i}
        

        <div>
            <ul>
                <li> {fieldName} </li>
                <br>
                <li>
            {#if fields[fieldName] === "select"}
            <div class="select-wrapper">
                <label for="{fieldName}">{fieldName}</label>
                <select name="{fieldName}" id="{fieldName}">
                <option selected="{null}" value="">Scegli un'opzione</option>
                <option value="esempio">esempio</option>
                </select>
            </div>
            {:else if fields[fieldName] === "cost"}
                <div>
                    <div class="form-group">
                    <label for="costi_tariffe" class="input-symbol-label active">Currency</label>
                    <div class="input-group input-number">
                        <span class="input-group-text fw-semibold">€</span>
                        <input type="number" class="form-control " data-bs-input id="costi_tariffe" name="costi_tariffe" step="any" value="0.00" min="0" />
                        <span class="input-group-text align-buttons flex-column">
                        <button class="input-number-add">
                            <span class="visually-hidden">Aumenta valore Euro</span>
                        </button>
                        <button class="input-number-sub">
                            <span class="visually-hidden">Diminuisci valore Euro</span>
                        </button>
                        </span>
                    </div>
                    </div>
        
                </div>
        
            {:else if fields[fieldName] === "time"}
        <div class="row">
            <div class="form-group w-25">
                <label for="days" class="input-symbol-label active">Giorni</label>
                <div class="input-group input-number">
                <span class="input-group-text fw-semibold">gg</span>
                <input type="number" class="form-control " data-bs-input id="days" name="days" step="1" value="0" min="0" />
                <span class="input-group-text align-buttons flex-column">
                    <button class="input-number-add">
                    <span class="visually-hidden">Aumenta valore</span>
                    </button>
                    <button class="input-number-sub">
                    <span class="visually-hidden">Diminuisci valore</span>
                    </button>
                </span>
                </div>
            </div>
        
            <div class="form-group w-25">
                <label for="days" class="input-symbol-label active">Ore</label>
                <div class="input-group input-number">
                <span class="input-group-text fw-semibold">hh</span>
                <input type="number" class="form-control " data-bs-input id="hours" name="hours" step="1" value="0" min="0" />
                <span class="input-group-text align-buttons flex-column">
                    <button class="input-number-add">
                    <span class="visually-hidden">Aumenta valore</span>
                    </button>
                    <button class="input-number-sub">
                    <span class="visually-hidden">Diminuisci valore</span>
                    </button>
                </span>
                </div>
            </div>
        
            <div class="form-group w-25">
                <label for="days" class="input-symbol-label active">minuti</label>
                <div class="input-group input-number">
                <span class="input-group-text fw-semibold">'</span>
                <input type="number" class="form-control " data-bs-input id="minutes" name="minutes" step="1" value="0" min="0" />
                <span class="input-group-text align-buttons flex-column">
                    <button class="input-number-add">
                    <span class="visually-hidden">Aumenta valore</span>
                    </button>
                    <button class="input-number-sub">
                    <span class="visually-hidden">Diminuisci valore</span>
                    </button>
                </span>
                </div>
            </div>
        </div>
            
            {:else}
            <div class="form-group">
            <label class:active="{fields[fieldName] === 'date'}"  for="{fieldName}">{fieldName}</label>
            <input type="{fields[fieldName]}" class="form-control" id="{fieldName}" name="{fieldName}">
            </div>
            {/if}
                </li>
            </ul>
        </div>

    {/each}
</section>


<style>
    ul{
        margin: 5px;
        padding: 3px;
        list-style: none;
    }

    #card{
        background-color: lightgrey;
    }
</style>