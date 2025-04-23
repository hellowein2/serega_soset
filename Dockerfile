# Используем официальный Python образ
FROM python:3.12

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем requirements файла
COPY requirements.txt .

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем исходный код приложения
COPY . .

# Открываем порт для доступа к приложению
EXPOSE 80

# Команда для запуска FastAPI приложения
CMD ["uvicorn", "app.backend.main:app", "--host", "0.0.0.0", "--port", "80"]
