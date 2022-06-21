insert into tb_funcionario (ID_FUNCIONARIO, DS_EMAIL, DS_SENHA)
values (1, "cauanfofo12@gmail.com", "1234");

insert into tb_agendamento (ID_AGENDAMENTO, NM_VEICULO, NM_COR, DS_CPF, DS_TELEFONE, NM_CLIENTE, DT_ATENDIMENTO)
values (1, "Fiat Toro", "Preto", "00000900", "(11) 9999-999", "Gabriel", '2022-05-05');


{
    "CLIENTE": "cauan",
    "VEICULO":"fiat",
    "COR": "Preto",
    "CPF": "00000900",
    "TELEFONE": "(11) 9999-999",
    "ATENDIMENTO": "2022-05-05"
  }

update tb_agendamento
	set	NM_VEICULO  = 'kombi',
		NM_COR	= 'verde',
		DS_CPF	= '12345678901',
		DS_TELEFONE	= '(11) 91234-1234',
		NM_CLIENTE	= 'Guilherme',
		DT_ATENDIMENTO = '2022-10-05 10:13:00'
	where id_agendamento = 1;