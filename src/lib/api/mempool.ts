// Mempool API Client

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://mempool.space/api';

export async function getMempoolInfo() {
  const response = await fetch(`${API_URL}/mempool`);
  return response.json();
}

export async function getFeeEstimates() {
  const response = await fetch(`${API_URL}/v1/fees/recommended`);
  return response.json();
}

export async function getRecentTransactions() {
  const response = await fetch(`${API_URL}/mempool/recent`);
  return response.json();
}

export async function getBlocks() {
  const response = await fetch(`${API_URL}/v1/blocks`);
  return response.json();
}
