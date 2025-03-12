define({
  // Optional display list in which to override elements from the template display list
  /*
   * BONUS LOGO --> it has to be moved slightly to the left on the bonus screen. :)
   */
  winPlaqueMessage: {
    type: 'text',
    string: 'message_win',
    style: 'winPlaqueBody',
    y: -68,
    anchor: 0.5,
    maxWidth: 350,
  },
  winPlaqueValue: {
    type: 'text',
    style: 'winPlaqueValue',
   
    anchor: 0.5,    
    landscape: {
      y: 50,
      maxWidth: 400,
    },
    portrait: {
      y: 30,
      maxWidth: 280,
    }
  },
});
