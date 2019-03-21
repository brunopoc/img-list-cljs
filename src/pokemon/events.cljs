(ns pokemon.events
  (:require
   [clojure.walk :as walk]
   [re-frame.core :as rf]
   [reagent.core :as r]
   ))


; Code used to fetch data from api
; Usage:
; (rf/reg-event-fx :get-something
;                  (fn [_ _]
;                    {:fetch {:query      some-query
;                             :variables  {:name "foo"}
;                             :on-success [:some-event]
;                             :on-error   [:some-other-event]}}))


(rf/reg-sub
 :get-list-todo
 (fn [db] (:list-todo db)))


(rf/reg-event-db
 :add-todo
 (fn [db [_ item]] (update db :list-todo conj item)))

(rf/reg-event-db
 :remove-todo
 (fn [db [_ item]] (update db :list-todo (fn [old-list] (remove #(= item %) old-list)))))


(rf/reg-event-db
 :show-input-todo-list
 (fn [db [_ item]] 
   (update db :list-todo 
           (fn [old-list]
             (map (fn [old-item]
                    (if (= (:id old-item) (:id item))
                      {:id (:id old-item)
                       :value (:value old-item)
                       :input true
                       :done (:done old-item)}
                      old-item)) old-list)))))

(rf/reg-event-db
 :todo-done
 (fn [db [_ item]] (update db :list-todo
                          (fn [old-list]
                            (map (fn [old-item]
                                   (if (= (:id old-item) (:id item))
                                     {:id (:id old-item)
                                      :value (:value old-item)
                                      :input (:input old-item)
                                      :done (not (:done item))}
                                     old-item)) old-list)))))

(rf/reg-event-db
 :edit-item-list
 (fn [db [_ item newvalue]] (update db :list-todo
                                    (fn [old-list]
                                      (map (fn [old-item]
                                             (if (= (:id old-item) (:id item))
                                               {:id (:id old-item)
                                                :value newvalue
                                                :input false
                                                :done (:done old-item)}
                                               old-item)) old-list)))))

(rf/reg-fx :fetch
  (fn [{:keys [query variables on-error on-success]}]
    (let [body                (-> {:query     query
                                   :variables variables}
                                  clj->js
                                  js/JSON.stringify)
          on-unexpected-error (fn [e]
                                (rf/dispatch (conj on-error e)))
          on-reponse          (fn [response]
                                (if-not (.-ok response)
                                  (throw (js/Error (.-statusText response)))
                                  (.json response)))
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
          (.catch on-unexpected-error)))))

(def ^:private default-db
  {:app-name "Xerpa"})

(rf/reg-event-fx :initialize
  (fn [_ _]
    {:db default-db}))