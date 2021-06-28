(ns app.core
  [:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
  ;;  [reitit.core :as reit]
   [reitit.frontend.easy :as rfe]
   [reitit.frontend :as rf]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]
   [fipp.edn :as fedn]
   [app.clock :refer [clock]]
   [app.header :refer [header]]
   [app.feature :refer [feature]]
   [app.smartJackpots :refer [smartJ]]
   [app.designedby :refer [designed]]
   [app.whyus :refer [whyus]]
   [app.ultimatefeature :refer [uFeature]]
   [app.pricing :refer [pricing]]
   [app.testimonila :refer [testmonila]]
   [app.faq :refer [faq]]
   [app.footer :refer [footer]]])



(def open-hambg (r/atom false))

(defn open-hambg->change-state []
  (reset! open-hambg (not @open-hambg)))

(defn right-nav []
  [:<>
   [:div {:class (str "hambg " (if (= @open-hambg true)
                                 "show"
                                 ""))
          :on-click open-hambg->change-state}
    [:div.bar1]
    [:div.bar2]
    [:div.bar3]]
   [:div {:class (str "nav-items " (if (= @open-hambg true)
                                     "show"
                                     ""))}
    [:a {:href (rfe/push-state ::home)} "Home"]
    [:a {:href (rfe/href ::clock {:id 1})} "Clock"]]])

(defn logo []
  [:a.logo {:href (rfe/push-state ::home)} "Lab"])

(defn navbar []
  [:nav.navbar
   (logo)
   (right-nav)])



(defn home-page []
  [:<>
   [header]
   [feature]
   [smartJ]
   [designed]
   [whyus]
   [uFeature]
   [pricing]
   [testmonila]
   [faq]
   [footer]])

(defn clock-page [match]
  [:div
   [clock]])

(defonce match (r/atom nil))

(defn current-page []
  [:div
   [navbar]
   (when @match
     (let [view (:view (:data @match))]
       [view @match]))])

(def routes
  [["/"
    {:name ::home
     :view home-page}]

   ["/clock"
    {:name ::clock
     :view clock-page}]
   ])


(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
   {:use-fragment true})
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn main []
  (render))