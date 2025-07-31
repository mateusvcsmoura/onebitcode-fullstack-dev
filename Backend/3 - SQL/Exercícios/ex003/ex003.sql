-- Especialidades, Médicos, Pacientes e Endereços

CREATE TYPE person_gender AS ENUM('F', 'M');

CREATE TABLE IF NOT EXISTS specialities (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS doctors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  
  speciality_id INT NOT NULL,
  FOREIGN KEY (speciality_id) REFERENCES specialities(id)
);

CREATE TABLE IF NOT EXISTS patients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  birthdate DATE NOT NULL,
  gender person_gender NOT NULL,
  phone VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS addresses (
  id SERIAL PRIMARY KEY,
  street VARCHAR(255) NOT NULL,
  number VARCHAR(5),
  complement VARCHAR(255),
  city VARCHAR(255) NOT NULL,

  patient_id INT UNIQUE,
  FOREIGN KEY (patient_id) REFERENCES patients(id)
);

-- Consultas e Tratamentos
CREATE TYPE type_service AS ENUM('SUS', 'Particular', 'Plano de Saúde');

CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  appointment_date DATE NOT NULL DEFAULT CURRENT_DATE,
  type_of_appointment_service type_service NOT NULL,
  notes TEXT,

  doctor_id INT NOT NULL,
  patient_id INT NOT NULL,

  FOREIGN KEY (doctor_id) REFERENCES doctors(id),
  FOREIGN KEY (patient_id) REFERENCES patients(id)
);

CREATE TABLE IF NOT EXISTS medical_treatments (
  id SERIAL PRIMARY KEY,
  medicines VARCHAR(255) NOT NULL,
  description TEXT,

  appointment_id INT NOT NULL,
  FOREIGN KEY (appointment_id) REFERENCES appointments(id) ON DELETE CASCADE
);