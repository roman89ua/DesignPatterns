import {Compressor} from "./Modules/Compressor";
import {WebServer} from "./Modules/WebServer";
import {HttpRequest} from "./Modules/HttpRequest";
import {Logger} from "./Modules/Logger";
import {Authenticator} from "./Modules/Authenticator";

export class ChainOfResponsibility {
  constructor() {
    console.log("CHAIN OF RESPONSIBILITY PATTERN");
    //authenticate => logg => compress
    const compressor = new Compressor(null);
    const logger = new Logger(compressor);
    const authenticator = new Authenticator(logger);
    const server = new WebServer(authenticator);
    
    server.handle(new HttpRequest("admin", "12345"));
  }
}
