# Default PAGE object:
config.cache_period = 5
page = PAGE
page {
  bodyTag = <body>
  meta.AUTHOR = Matthias van Gemmern
  meta.DESCRIPTION = Sample work Page
  
  10 = TEMPLATE
  10.template = FILE
  10.template.file = fileadmin/template/main/template.html
  10.workOnSubpart = DOKUMENT
  
  includeCSS{
    screen = fileadmin/template/main/style.css
    screen.title = display
    screen.media = screen
  }
  10.marks {
    #setzt Datum
    DATE = TEXT
    DATE.data = date : d.m.Y H:i:s
  
    #Logo
    LOGO = IMAGE
    #LOGO.file = fileadmin/images/Gemmers0n.svg
    LOGO.file = fileadmin/images/G.PNG
    LOGO.file.height = 115
  
    #Den Hintergrund bauen
    BACKGROUND = IMAGE
    BACKGROUND.file = GIFBUILDER
    BACKGROUND.file {
      XY = 816, 115
      backcolor = #ffffff
  
      10 = IMAGE
      10.file = fileadmin/images/back1.png
      10.file.height = 115
      10.file.width = 816
  
      20 = IMAGE
      20.file = GIFBUILDER
      20.file.backColor = #ffffff
      20.file.XY = 816, 115
      20.mask = fileadmin/images/verlauf.png
  
      30 = TEXT
      30.text.field = title
      30.fontFile = fileadmin/fonts/Roboto-Light.ttf
      30.fontSize = 20
      30.fontColor = #000000
      30.niceText = 1
      30.offset = 10, 105
    }
  }
}
