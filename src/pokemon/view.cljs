(ns pokemon.view
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [clojure.walk :as walk]
   ))

;none;to-do list

(def list-todo (r/atom []))



(defn add-item-list [item]
  (println @(rf/subscribe [:get-list-todo]))
  (swap! list-todo conj item)
  (rf/dispatch [:add-todo item]))

(defn handle-on-key-press [event]
  (when (= "Enter" (-> event .-key)) 
    (add-item-list {:id (js/Date) :value (-> event .-target .-value) :input false :done false})))

(defn remove-item-list [item]
  (swap! list-todo (fn [old-list] (remove #(= item %) old-list)))
  (rf/dispatch [:remove-todo item]))

(defn show-input-item-list [item]
  (rf/dispatch [:show-input-todo-list item]))

(defn edit-item-list [e item]
  (when (= "Enter" (-> e .-key)) (rf/dispatch [:edit-item-list item (-> e .-target .-value)])))

(defn todo-done [e item]
  (rf/dispatch [:todo-done item]))

(defn list-items [item-map]
  [:li {:style {:padding " 10px 5px"
                :display "flex"
                :justify-content "space-between"} :key (:id item-map)}
   [:div (if (false? (:input item-map))
           (if (false? (:done item-map)) 
                       (:value item-map)
                       [:span {:style {:text-decoration "line-through"}} (:value item-map)])
           [:input {:default-value (:value item-map)
                    :on-key-press #(edit-item-list % item-map)}])]
   [:div
    "Feito" [:input {:style {:margin-right "10px"
                             :height "20px"
                             :width "20px"}
                     :on-change #(todo-done % item-map)
                     :type "checkbox"}]
    (if (false? (:done item-map))
      [:button {:style {:padding "10px"
                        :background-color "#033EA4"
                        :border-radius "2px"
                        :color "white"
                        :font-weight "600"
                        :font-size "16px"
                        :border "unset"}
                :on-click #(show-input-item-list item-map)} "Editar"]
      [:button {:style {:padding "10px"
                        :background-color "#90A1BE"
                        :border-radius "2px"
                        :color "white"
                        :font-weight "600"
                        :font-size "16px"
                        :border "unset"}} "Editar"])
    [:button {:on-click #(remove-item-list item-map)
              :style {:padding "10px"
                      :background-color "#B00000"
                      :margin-left "10px"
                      :border-radius "2px"
                      :color "white"
                      :font-weight "600"
                      :font-size "16px"
                      :border "unset"}} "Delete"]]])

;Render Principal
(defn show []
  [:div.main
   {:style {:display "flex"
            :padding-top "50px"
            :flex-direction "column"
            :align-items "center"
            :font-size "20px"}}
   [:p "Lista de Tarefas"]
   [:input {:placeholder "Digite sua tarefa e aperte enter!"
            :style {:width "300px"
                    :padding "20px"
                    :border-radius "5px"
                    :outline "none"
                    :box-shadow "unset"}
            :on-key-press handle-on-key-press}]
   [:ul {:style {:list-style "none"
                 :width "80%"
                 :background-color "#F3F3F3"
                 :padding "20px 20px"}}
    (map list-items @(rf/subscribe [:get-list-todo]))
    ]])