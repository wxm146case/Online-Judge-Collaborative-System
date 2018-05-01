import { Injectable } from '@angular/core';
import { COLORS } from '../../../assets/colors';

declare var io: any;
declare var ace: any;
@Injectable()
export class CollaborationService {
  clientsInfo: Object = {};
  clientNum: number = 0;
  collaborationSocket: any;
  constructor() { }

  // init(): void {
  //   this.collaborationSocket = io(window.location.origin, { query: 'message=' +'hahahaha'});

  //   this.collaborationSocket.on('message', (message) => {
  //     console.log('message received from server: ' + message);
  //   });
  // }
  init(sessionId: string, editor: any): void {
    this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId});

    // listeners
    this.collaborationSocket.on('change', (delta: string) => {
      console.log('collabration from server : editor changes by ' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });

    this.collaborationSocket.on('cursorMove', (cursor: string) => {
      console.log('cursor move:' + cursor);
      const session = editor.getSession();
      cursor = JSON.parse(cursor);
      const x = cursor['row'];
      const y = cursor['column'];
      const changeClientId = cursor['socketId'];

      if (changeClientId in this.clientsInfo) {
        session.removeMarker(this.clientsInfo[changeClientId]['marker']);
      } else {
        this.clientsInfo[changeClientId] = {};
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `.editor_cursor_${changeClientId}
                        { 
                          position:absolute;
                          background:${COLORS[this.clientNum]};
                          z-index:100;
                          width:3px !important;
                        }`;
        document.body.appendChild(css);
        this.clientNum++;
      }
      const Range = ace.require('ace/range').Range;
      const newMarker = session.addMarker(new Range(x, y, x, y + 1), `editor_cursor_${changeClientId}`, true);
      this.clientsInfo[changeClientId]['marker'] = newMarker;
    });
  }

  change(delta: string) {
    this.collaborationSocket.emit('change', delta);
  }

  cursorMove(cursor: string) {
    this.collaborationSocket.emit('cursorMove', cursor);
  }

  restoreBuffer(): void {
    this.collaborationSocket.emit('restoreBuffer');
  }
}
