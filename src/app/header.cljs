(ns app.header
  (:require [app.button :refer [button]]))


(defn header []
  [:header.header
   [:div.header-content
    [:div.header-main
     [:div.header-main-text
      [:p.header-main-text-1-editiors-choice
       [:i {:class "far fa-check-circle"}] "#1 Editiors Choice App of 2020"]
      [:p.header-main-text-best-app-for "Best app for your modern lifestyle"]
      [:p.text-sub " Increase productivity with a simple to-do app, app for managing your personal budgets."]
      [:div.header-main-text-buttons 
       (button "Try for free")
       [:a {:href "#"} "Watch demo video"]]]
     [:img.header-main-phone-pict {:src "../img/phone-header.png" 
                                   :alt "nothing"}]]]])