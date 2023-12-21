const modifingVid = () => {
  const videoOnPageNotModded = document.querySelectorAll('video:not([mod="true"])')

  // function for edit video
  videoOnPageNotModded.forEach(video => {
    const tagButton =
      video.parentElement.lastElementChild.lastElementChild.lastElementChild

    if (tagButton.classList.contains('_a9-5')) {
      // append tag button to his "grandparents"
      tagButton.parentElement.parentElement.appendChild(tagButton)
      // move tag button 
      tagButton.style.cssText +=
        'bottom: 40px !important; left: unset !important; right: 4px !important;'
    }
  })

  // editing video
  videoOnPageNotModded.forEach(video => {
    video.setAttribute('controls', true)
    video.setAttribute('mod', true)

    video.onloadstart = () => {
      video.pause()
    }

    video.onplay = () => {
      video.muted = false
    }

    video.onpause = () => {
      video.muted = true
    }

    video.onended = () => {
      video.pause()
    }
  })

  const videoOnPage = document.querySelectorAll('video')
  videoOnPage.forEach(video => {
    video.pause()
  })

  // remove overlay
  const videoOverlays = document.querySelectorAll(
    ' [data-visualcompletion="ignore"] '
  )

  videoOverlays.forEach(overlay => {
    overlay.remove()
  })
}

let timerId = ''

const timerFn = () => {
  timerId = setTimeout(modifingVid(), 300)
}

window.onscroll = () => {
  clearTimeout(timerId)
  timerFn()
}
