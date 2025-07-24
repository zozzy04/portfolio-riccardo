import React, { useEffect, useRef, useState } from "react";

const COMMANDS = [
  "dir",
  "cd ..",
  "ipconfig /all",
  "ping google.com -t",
  "cls",
  "mkdir new_folder",
  "del file.txt",
  "echo Hello World!",
  "copy a.txt b.txt",
  "tasklist /v",
  "netstat -an | find \"ESTABLISHED\"",
  "chkdsk /f /r",
  "systeminfo | findstr /B /C:\"OS\" /C:\"System\"",
  "tree /f /a",
  "help | more",
  "exit",
  "for /L %i in (1,1,10) do @echo %i",
  "type nul > newfile.txt",
  "move *.txt backup/",
  "set PATH=%PATH%;C:\\NuovaCartella",
  "echo %USERNAME% @ %COMPUTERNAME%",
  "cd C:\\Users\\%USERNAME%\\Documents",
  "findstr /S /I \"password\" *.*",
  "powershell Get-Process | Sort-Object CPU -Descending | Select-Object -First 5",
  "ipconfig\nnetstat -an\ntasklist",
  "echo Start build && npm run build && echo Done!",
];

const ROWS = 12; // Più righe animate contemporaneamente
const ANIMATION_SPEED = 30; // ms per lettera (più veloce)
const ROW_LIFETIME = 700; // ms prima che una riga venga cancellata (più dinamico)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCommand() {
  return COMMANDS[getRandomInt(0, COMMANDS.length - 1)];
}

function getRandomPosition() {
  return {
    top: getRandomInt(2, 95) + "%",
    left: getRandomInt(2, 95) + "%",
  };
}

const CmdBackground = () => {
  const [rows, setRows] = useState([]);
  const nextId = useRef(0);

  // Funzione per aggiungere una nuova riga
  const addRow = () => {
    const command = getRandomCommand();
    const position = getRandomPosition();
    const id = nextId.current++;
    setRows((prev) => [
      ...prev,
      {
        id,
        command,
        position,
        text: "", // testo attuale (per animazione)
        phase: "typing", // typing | waiting | deleting
      },
    ]);
  };

  // Gestione animazione scrittura/cancellazione
  useEffect(() => {
    // Per ogni riga, gestisci la sua animazione
    const timers = rows.map((row) => {
      if (row.phase === "typing") {
        if (row.text.length < row.command.length) {
          return setTimeout(() => {
            setRows((prev) =>
              prev.map((r) =>
                r.id === row.id
                  ? { ...r, text: row.command.slice(0, r.text.length + 1) }
                  : r
              )
            );
          }, ANIMATION_SPEED + getRandomInt(0, 30));
        } else {
          // Passa a fase waiting
          return setTimeout(() => {
            setRows((prev) =>
              prev.map((r) =>
                r.id === row.id ? { ...r, phase: "waiting" } : r
              )
            );
          }, 300 + getRandomInt(0, 200)); // attesa più breve
        }
      } else if (row.phase === "waiting") {
        // Dopo un po', inizia a cancellare
        return setTimeout(() => {
          setRows((prev) =>
            prev.map((r) =>
              r.id === row.id ? { ...r, phase: "deleting" } : r
            )
          );
        }, ROW_LIFETIME + getRandomInt(0, 200));
      } else if (row.phase === "deleting") {
        if (row.text.length > 0) {
          return setTimeout(() => {
            setRows((prev) =>
              prev.map((r) =>
                r.id === row.id
                  ? { ...r, text: row.text.slice(0, -1) }
                  : r
              )
            );
          }, ANIMATION_SPEED + getRandomInt(0, 30));
        } else {
          // Rimuovi la riga (senza aggiungerne subito una nuova)
          setTimeout(() => {
            setRows((prev) => prev.filter((r) => r.id !== row.id));
          }, 100);
        }
      }
      return null;
    });
    return () => timers.forEach((t) => t && clearTimeout(t));
    // eslint-disable-next-line
  }, [rows]);

  // All'avvio, popola le righe iniziali
  useEffect(() => {
    if (rows.length < ROWS) {
      const toAdd = ROWS - rows.length;
      for (let i = 0; i < toAdd; i++) addRow();
    }
    // eslint-disable-next-line
  }, [rows.length]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {rows.map((row) => (
        <span
          key={row.id}
          className={`cmd-row cmd-row-${row.phase}`}
          style={{
            position: "absolute",
            top: row.position.top,
            left: row.position.left,
            color: "#fff",
            fontFamily: "monospace",
            fontSize: "1.1rem",
            opacity: 0.7,
            whiteSpace: "pre",
            userSelect: "none",
            textShadow: "0 0 6px #000",
            transition: "opacity 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {row.text}
        </span>
      ))}
    </div>
  );
};

export default CmdBackground; 