#Use to create local host
import SimpleHTTPServer
import SocketServer

PORT = 8000

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    ".js": "application/javascript",
});

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "Serving at port", PORT
print(Handler.extensions_map[".js"])
httpd.serve_forever()
