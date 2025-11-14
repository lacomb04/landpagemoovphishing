-- Criar tabela de feedback
CREATE TABLE IF NOT EXISTS feedback (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  feedback TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserts públicos (qualquer um pode enviar feedback)
CREATE POLICY "Permitir insert de feedback públicos" 
ON feedback 
FOR INSERT 
WITH CHECK (true);

-- Política para ver os dados (apenas para admin, opcional)
CREATE POLICY "Permitir leitura de feedback" 
ON feedback 
FOR SELECT 
USING (false);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_feedback_created_at 
ON feedback(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_feedback_rating 
ON feedback(rating);
