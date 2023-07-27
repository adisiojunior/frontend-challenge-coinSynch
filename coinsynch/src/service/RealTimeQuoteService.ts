import { REACT_KEY } from "@/env";

// api/realtimeQuotes.ts
const wsUrl = `wss://ws.coinapi.io/v1/quotes?apikey=${REACT_KEY}`;

const quotesData: any = {};

function handleWebSocketMessage(event: any) {
  try {
    const quote = JSON.parse(event.data);
    const symbol = quote.symbol_id;
    const price = quote.ask_price;
    quotesData[symbol] = price;
  } catch (error) {
    console.error('Erro ao processar mensagem do WebSocket:', error);
  }
}

export function startRealtimeQuotes() {
  const ws = new WebSocket(wsUrl);
  console.log("URL =>", wsUrl)

  ws.onopen = () => {
    console.log('Conectado ao WebSocket da CoinAPI para cotações em tempo real');
  };
  ws.onmessage = handleWebSocketMessage;
  ws.onerror = (error) => {
    console.error('Ocorreu um erro na conexão WebSocket:', error);
  };
}

export function getRealtimeQuotes() {
  return quotesData
}