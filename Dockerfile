FROM public.ecr.aws/bitnami/python:3.9

RUN python --version

RUN apt-get update && apt-get install --no-install-recommends -y \
  # dependencies for building Python packages
  build-essential \
  # psycopg2 dependencies
  libpq-dev

RUN apt-get install redis-server -y

WORKDIR /edly
COPY . .
COPY requirements/production.txt ./

RUN pip3 install -r requirements/production.txt

EXPOSE 8000

EXPOSE 6379

ENTRYPOINT ["sh","entrypoint.sh"]