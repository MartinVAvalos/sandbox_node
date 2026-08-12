.PHONY: ts

ts:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Usage: make ts <number>"; \
		exit 1; \
	fi
	npx ts-node leet/$(filter-out $@,$(MAKECMDGOALS))-*.ts

%:
	@:
