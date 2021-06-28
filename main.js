const electron = require("electron")
const app = electron.app
var path = require("path")

const BrowserWindow = electron.BrowserWindow

//cuando la app crea la ventana
app.on ("ready", function(){
    //comienza a crear la primer ventana
    let loginwindow = new BrowserWindow({
        //tamaño de la ventana
        width : 800,
        height : 800,
        maxheight: 800,
        maxwidth: 800,

        //preferencias we
        webPreferences:{
            preload: path.join(__dirname, "preload.js")

        }
    })
    //cargar html
    loginwindow.loadURL("file://" + __dirname + "/html/login.html")
    //cuando el html sea cargado y la ventana este lista para mostrarse
    loginwindow.once("ready-to-show",function(){
        loginwindow.show()
    })
})

//quitar cuando todas las ventanas son cerradas
app.on("window-all-closed",function(){
        if(process.platform !== "darwin")app.quit()
})
