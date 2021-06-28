(ns app.clock
  (:require
   [reagent.core :as r]
   ["analog-clock-react" :default AnalogClock]
   [app.button :refer [button]]))

(def display-custom (r/atom false))

(def date (r/atom '()))

(def analog-clock-props (r/atom {:useCustomTime true
                                 :width "300px"
                                 :border true
                                 :borderColor "#2e2e2e"
                                 :baseColor "#17a2b8"
                                 :centerColor "#459cff"
                                 :centerBorderColor "#fff"
                                 :handColors {:second "#d81c7a"
                                              :minute "#fff"
                                              :hour "#fff"}
                                 :seconds (.getSeconds (new js/Date))
                                 :hours (.getHours (new js/Date))
                                 :minutes (.getMinutes (new js/Date))}))

(defn get-current-time []
  (js/setInterval
   #((if (not @display-custom)
       (let [date (new js/Date)]
         (swap! analog-clock-props assoc :seconds (.getSeconds date))
         (swap! analog-clock-props assoc :hours (.getHours date))
         (swap! analog-clock-props assoc :minutes (.getMinutes date)))))
   1000))

(defn change-display []
  (reset! display-custom (not @display-custom)))

(defn clock []
  (get-current-time)
  [:div.clock
   [:> AnalogClock @analog-clock-props]
   [:div.btn
    [:button.try-for-free-btn {:on-click change-display} "show current time"]
    [:button.try-for-free-btn {:on-click change-display} "show customn"]
    [:input
     {:type "text"
      :value @date
      :on-change #(reset! date (.-value (.-target %)))
      :placeholder "enter in format: hh:mm:ss"}]]])