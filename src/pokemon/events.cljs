(ns pokemon.events
  (:require
   [clojure.walk :as walk]
   [re-frame.core :as rf]
   [reagent.core :as r]
   ))

(rf/reg-event-db
 :save-pkm-list
 (fn [db [_ item]]
   (update db :pkm-list (fn [] item))))

(rf/reg-event-db
 :save-pkm
 (fn [db [_ item]]
   (update db :pokemon (fn [] item))))

(rf/reg-sub
 :get-pkm-list
 (fn [db] (:pkm-list db)))

 (rf/reg-sub
  :get-pkm
  (fn [db] (:pokemon db)))