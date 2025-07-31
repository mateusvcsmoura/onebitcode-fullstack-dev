-- Obter todos os pacientes juntamente com suas consultas e os médicos que os atenderam.
SELECT 
  patients.id AS id_paciente,
  patients.name AS nome_paciente,
  patients.gender AS genero, 
  appointments.id AS id_consulta,
  appointments.type_of_appointment_service AS tipo_atendimento,
  appointments.notes AS observacoes,
  doctors.id AS id_medico,
  doctors.name AS nome_medico
FROM patients
JOIN appointments ON patients.id = appointments.patient_id
JOIN doctors ON appointments.doctor_id = doctors.id;

-- Obter todas as consultas de um determinado médico, incluindo informações dos pacientes e observações.
SELECT
  doctors.id AS id_medico,
  doctors.name AS nome_medico,
  appointments.id AS id_consulta,
  appointments.type_of_appointment_service AS tipo_atendimento,
  appointments.patient_id AS id_paciente,
  patients.name AS patient_name,
  appointments.notes AS observacoes
FROM appointments
JOIN doctors ON appointments.doctor_id = doctors.id
JOIN patients ON appointments.patient_id = patients.id
WHERE appointments.doctor_id = 5;

-- Obter uma lista de todos os tratamentos prescritos em consultas, incluindo informações dos médicos e pacientes.
SELECT 
  doctors.name AS medico,
  patients.name AS paciente,
  medical_treatments.id AS id_tratamento,
  medical_treatments.medicines AS medicamentos,
  medical_treatments.description AS descricao_tratamento
FROM medical_treatments
JOIN appointments ON medical_treatments.appointment_id = appointments.id
JOIN doctors ON appointments.doctor_id = doctors.id
JOIN patients ON appointments.patient_id = patients.id;

-- Obter todos os médicos com suas respectivas especializações.
SELECT
  doctors.id AS id_medico,
  doctors.name AS medico,
  specialities.id AS id_especialidade,
  specialities.title AS especialidade
FROM specialities
JOIN doctors ON doctors.speciality_id = specialities.id;

-- Obter todas as consultas realizadas em uma data específica, incluindo informações de pacientes e médicos.
SELECT 
  patients.name AS paciente,
  doctors.name AS medico,
  appointments.notes AS observacoes_consulta,
  appointments.appointment_date AS data_consulta
FROM appointments
JOIN doctors ON appointments.doctor_id = doctors.id
JOIN patients ON appointments.patient_id = patients.id
WHERE appointments.appointment_date = '2025-07-04';

-- Obter uma lista de todos os pacientes que foram atendidos por médicos de uma determinada especialização.
SELECT 
  patients.id AS id_paciente,
  patients.name AS paciente,
  doctors.id AS id_medico,
  doctors.name AS medico,
  specialities.title AS especialidade
FROM appointments
JOIN doctors ON appointments.doctor_id = doctors.id
JOIN patients ON appointments.patient_id = patients.id
JOIN specialities ON doctors.speciality_id = specialities.id
WHERE specialities.title = 'Pediatria';

-- Obter todos os tratamentos em andamento de um determinado paciente.
SELECT
  patients.id AS id_paciente,
  patients.name AS paciente,
  medical_treatments.id AS id_tratamento,
  medical_treatments.medicines AS medicamentos,
  medical_treatments.description AS descricao_tratamento,
  appointments.appointment_date AS data_consulta
FROM medical_treatments
JOIN appointments ON medical_treatments.appointment_id = appointments.id
JOIN patients ON appointments.patient_id = patients.id
WHERE patients.id = 1;