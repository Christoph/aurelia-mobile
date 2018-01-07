import * as Framework7 from "framework7"

// Framework7 Setup to be called by app.js when DOM is ready
export function setUpFramework7 () {
  const F7 = new Framework7({
    material: true,
    animateNavBackIcon: true
  })

  const mainView = F7.addView('.view-main', {
    domCache: true // enable inline pages
  })
}
