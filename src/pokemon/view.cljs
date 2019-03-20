(ns pokemon.view
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   ))

(def img-list (r/atom []))

;list catalogo de imagens
(defn list-images [item] [:li {:style {:margin-right "20px"}}[:img {:style {:height "80px"} :src item}]])

(defn handle-image [event] (swap! img-list conj (-> event .-target .-files js/Object.values (aget 0) js/URL.createObjectURL)))

;Render Principal
(defn show []
  [:div.main
   {:style {:display "flex" 
            :padding-top "50px"
            :flex-direction "column"
            :align-items "center"
            :font-size "20px"}}
   
   [:div.header
    [:p "Lista de Imagens"]]
   
   [:div.content
    {:style {:background-color "#F3F3F3" :width "80%" :border-radius "5px"}}
    [:ul
     {:style {:list-style "none" :display "flex" :flex-direction "row"}} 
     (map list-images @img-list)]]
   
   [:div.user-section 
    [:form 
     [:input {:type "file" :style {:padding-top "25px"} :on-change handle-image}]]]])