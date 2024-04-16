FROM registry.gitlab.com/samuel-garratt/file_sv:slim
WORKDIR /home/app/service
COPY mock_backend mock_backend
COPY file_sv.yaml file_sv.yaml

ENTRYPOINT ["ruby", "/home/app/service/exe/file_sv"]
CMD ["serve", "."]
