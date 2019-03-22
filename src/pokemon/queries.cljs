(ns pokemon.queries)

(def pokemon
  "
query($name: String!){
  pokemon(name: $name){
    id
    name
    number
    image
    types
    evolutions{
      name
    }
  }
}
")

(def pokemons
  "
query ($first: Int!){
  pokemons(first: $first){
    id
    name
    number
  }
}  
  ")

;efeito com request -- exemplo
#_(fn [{:keys [query variables on-error on-success]}]
  (rf/dispatch [:add-one-request])
  (let [body                (-> {:query     query
                                 :variables variables}
                                clj->js
                                js/JSON.stringify)
        on-unexpected-error (fn [e]
                              (rf/dispatch (conj on-error e)))
        on-json             (fn [json]
                              (let [{:keys [data errors]} (-> json
                                                              js->clj
                                                              walk/keywordize-keys)]
                                (if errors
                                  (rf/dispatch (conj on-error errors))
                                  (rf/dispatch (conj on-success data)))))]
    (-> (js/fetch "https://graphql-pokemon.now.sh/"
                  (clj->js {:method  "POST"
                            :headers {"Content-Type" "application/json"}
                            :body    body}))
        (.then on-reponse)
        (.then on-json)
        (.catch on-unexpected-error)
        (.finally #(rf/dispatch [:drop-one-request])))))