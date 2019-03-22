(ns pokemon.view
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [clojure.walk :as walk]
   [pokemon.queries :as q]
   ))

(def pokemon-count (r/atom 0))
(def result (r/atom {}))

(defn handle-response [response]
  (.json response))

;;Request com JS/Fetch
(defn pokemon-fetch [variable query]
  (-> (js/fetch "https://graphql-pokemon.now.sh/"
                (clj->js {:method  "POST"
                          :headers {"Content-Type" "application/json"}
                          :body    (-> {:query query
                                        :variables variable}
                                       clj->js
                                       js/JSON.stringify)}))
      (.then handle-response)
      (.then (fn [response]
               (reset! result (:data (-> (js->clj response)
                                                       walk/keywordize-keys)))))))

(defn load-pkm-list []
  (swap! pokemon-count #(+ % 5))
  (-> (pokemon-fetch {:first @pokemon-count} q/pokemons)
      (.then (fn [value] (rf/dispatch [:save-pkm-list (:pokemons value)])))))

(defn load-pkm [name]
  (-> (pokemon-fetch {:name name} q/pokemon)
      (.then (fn [value] (rf/dispatch [:save-pkm (:pokemon value)])))))

(load-pkm-list)
(load-pkm "Bulbasaur")

(defn pokemon-info [mypokemon]
  [:div [:div.name {:style {:color "#F4F4F4"
                            :font-size "20px"
                            :margin-bottom "20px"}}
         (:name mypokemon)
         " #" (:number mypokemon)]
   [:img.br3 {:style {:height "200px"
                      :width "200px"
                      :background-color "#fff"
                      :margin-bottom "20px"}
              :src (:image mypokemon)}]
   [:div.pkmtype {:style {:color "#F4F4F4"
                          :font-size "20px"
                          :margin-bottom "20px"
                          :text-align "center"}}
    (for [types (:types mypokemon)]
      (str types " "))]])

(defn pokemon-list-render []
  [:div.flex.flex-column.items-center [:p {:style {:font-size "24px" :margin "10px 0px"}} "Lista de Pokemons"]
   [:button.pointer {:style {:padding "10px"
                             :background-color "#800000"
                             :border "1px solid #6A0000"
                             :color "#FFF"
                             :border-radius "10px"}
                     :on-click load-pkm-list} "Load more ..."]
   [:ul {:style {:color "#F4F4F4"}}
    (for [pokemon @(rf/subscribe [:get-pkm-list])]
      [:li.pointer {:key (:id pokemon) :style {:margin "5px"} :on-click #(load-pkm (:name pokemon))} (str "#" (:number pokemon)) (str " " (:name pokemon))])]])

(defn pkm-search [e]
  (when (= (-> e .-key) "Enter")
    (-> (pokemon-fetch {:name (-> e .-target .-value)} q/pokemon)
        (.then (fn [value] (rf/dispatch [:save-pkm (:pokemon value)]))))))

;Render Principal
(defn show []
  [:div.main.flex.justify-center
   {:style {:margin "10% 0px"
            :width "70%"
            :border-radius "10px"
            :border "1px solid #910000"
            :padding "10px 10px 20px 10px"
            :background-color "#C60000"}}
   [:div.flex.flex-column.items-center
    [:p {:style {:font-size "34px"}} "Pokemon"]
    [:input.br3 {:type "text" 
                 :style {:margin-bottom "20px"
                         :width "250px"
                         :padding "10px" 
                         :font-size "14px"
                         :border "unset"}
                 :on-key-press pkm-search
                 :placeholder "Pesquisar o nome do Pokemon ..."}]
    [pokemon-info @(rf/subscribe [:get-pkm])]
    [pokemon-list-render]
    ]])